import { useState, useEffect, useRef } from "react";
import "./TestimonialPosts.css";


const STATIC_POSTS = [
  {
    id: "static-1",
    text: "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    author: "Alex Morgan",
    avatar: "../../public/images/Avater1.svg"
  },
  {
    id: "static-2",
    text: "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    author: "Taylor Kim",
    avatar: "../../public/images/Avater2.svg"
  },
  {
    id: "static-3",
    text: "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    author: "Jordan Lee",
    avatar: "../../public/images/Avater3.svg"
  }
];

export default function TestimonialPosts() {
  const [dynamicPosts, setDynamicPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPostText, setNewPostText] = useState("");
  const [newPostAuthor, setNewPostAuthor] = useState("");
  const [newPostAvatar, setNewPostAvatar] = useState(null);
  const sliderRef = useRef(null);

  // Загрузка динамических постов из localStorage
  useEffect(() => {
    const saved = localStorage.getItem("dynamicTestimonials");
    if (saved) {
      try {
        setDynamicPosts(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse dynamic testimonials", e);
      }
    }
  }, []);

  // Сохранение динамических постов
  useEffect(() => {
    localStorage.setItem("dynamicTestimonials", JSON.stringify(dynamicPosts));
  }, [dynamicPosts]);

  // Прокрутка к концу при добавлении нового поста
  useEffect(() => {
    if (sliderRef.current && dynamicPosts.length > 0) {
      sliderRef.current.scrollTo({
        left: sliderRef.current.scrollWidth,
        behavior: "smooth"
      });
    }
  }, [dynamicPosts.length]);

  const handleAddPost = () => {
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPostText.trim() || !newPostAuthor.trim()) return;

    const newPost = {
      id: Date.now(),
      text: newPostText,
      author: newPostAuthor,
      avatar: newPostAvatar || "/images/default-avatar.png",
    };

    setDynamicPosts([...dynamicPosts, newPost]);
    setIsModalOpen(false);
    setNewPostText("");
    setNewPostAuthor("");
    setNewPostAvatar(null);
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewPostAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setNewPostText("");
    setNewPostAuthor("");
    setNewPostAvatar(null);
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -330, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 330, behavior: "smooth" });
    }
  };

  const allPosts = [...STATIC_POSTS, ...dynamicPosts];

  return (
    <div className="TestimonialPosts">
      <h1>What Our Clients Say</h1>

      <div className="slider-container">
        <button className="nav-btn left" onClick={scrollLeft}>←</button>

        <div className="posts-slider" ref={sliderRef}>
          {allPosts.map((post) => (
            <div key={post.id} className="post-card">
              <div className="quote-mark"><h2>“</h2></div>
              <p>{post.text}</p>
              <hr />
              <div className="author-info">
                <img src={post.avatar} alt={post.author} className="avatar" />
                <div>
                  <strong>{post.author}</strong>
                  <br />
                  <span>Head of Talent Acquisition, North America</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="nav-btn right" onClick={scrollRight}>→</button>
      </div>

      <button className="add-post-btn" onClick={handleAddPost}>
        Add testimonial
      </button>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Add New Testimonial</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Your feedback:
                <textarea
                  value={newPostText}
                  onChange={(e) => setNewPostText(e.target.value)}
                  placeholder="Write your testimonial here..."
                  required
                />
              </label>

              <label>
                Your name:
                <input
                  type="text"
                  value={newPostAuthor}
                  onChange={(e) => setNewPostAuthor(e.target.value)}
                  placeholder="Enter your full name"
                  required
                />
              </label>

              <label>
                Upload avatar (optional):
                <input type="file" accept="image/*" onChange={handleAvatarChange} />
              </label>

              {newPostAvatar && (
                <div className="preview-avatar">
                  <img src={newPostAvatar} alt="Preview" />
                </div>
              )}

              <div className="modal-buttons">
                <button type="button" onClick={closeModal} className="cancel-btn">
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}