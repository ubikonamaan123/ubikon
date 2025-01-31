import React, { useState } from 'react';
import axios from 'axios';

function PostUpload() {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        description: '',
        category: '',
        tags: '',
        seoMetaDescription: '',
        image: '',
    });

    const [posts, setPosts] = useState([]);

    // Function to handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/posts/create', formData);
            setPosts((prev) => [...prev, response.data]); // Add new post to the posts array
            setShowModal(false); // Close modal after submitting
            setFormData({
                title: '',
                slug: '',
                description: '',
                category: '',
                tags: '',
                seoMetaDescription: '',
                image: '',
            });
        } catch (error) {
            console.error('Error submitting the form:', error);
        }
    };

    return (
        <div>
            {/* Add Button */}
            <button
                style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                }}
                onClick={() => setShowModal(true)}
            >
                Add Post
            </button>

            {/* Modal */}
            {showModal && (
                <div
                    style={{
                        position: 'fixed',
                        top: '0',
                        left: '0',
                        right: '0',
                        bottom: '0',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <div
                        style={{
                            backgroundColor: 'white',
                            padding: '20px',
                            borderRadius: '5px',
                            minWidth: '300px',
                            position: 'relative',
                        }}
                    >
                        <h3>Create a New Post</h3>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    required
                                    placeholder="Post Title"
                                />
                            </div>
                            <div>
                                <label>Slug</label>
                                <input
                                    type="text"
                                    name="slug"
                                    value={formData.slug}
                                    onChange={handleChange}
                                    required
                                    placeholder="Post Slug"
                                />
                            </div>
                            <div>
                                <label>Description</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    required
                                    placeholder="Post Description"
                                />
                            </div>
                            <div>
                                <label>Category</label>
                                <input
                                    type="text"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    required
                                    placeholder="Category ID"
                                />
                            </div>
                            <div>
                                <label>Tags</label>
                                <input
                                    type="text"
                                    name="tags"
                                    value={formData.tags}
                                    onChange={handleChange}
                                    placeholder="Post Tags (comma separated)"
                                />
                            </div>
                            <div>
                                <label>SEO Meta Description</label>
                                <input
                                    type="text"
                                    name="seoMetaDescription"
                                    value={formData.seoMetaDescription}
                                    onChange={handleChange}
                                    placeholder="SEO Meta Description"
                                />
                            </div>
                            <div>
                                <label>Image</label>
                                <input
                                    type="file"
                                    name="image"
                                    onChange={(e) => {
                                        const file = e.target.files[0];
                                        if (file) {
                                            setFormData((prev) => ({
                                                ...prev,
                                                image: file, // Store the actual file object
                                            }));
                                        }
                                    }}
                                    placeholder="Upload Image"
                                />


                            </div>
                            <button type="submit">Submit</button>
                        </form>
                        <button
                            onClick={() => setShowModal(false)}
                            style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '5px',
                                borderRadius: '50%',
                            }}
                        >
                            X
                        </button>
                    </div>
                </div>
            )}

            {/* Display Posts */}
            <div>
                <h3>All Posts</h3>
                <ul>
                    {posts.map((post) => (
                        <li key={post._id}>
                            <h4>{post.title}</h4>
                            <p>{post.description}</p>
                            <p>Category: {post.category}</p>
                            <p>Tags: {post.tags.join(', ')}</p>
                            <p>SEO Meta: {post.seoMetaDescription}</p>
                            <img src={post.image} alt={post.title} style={{ maxWidth: '100px' }} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default PostUpload;
