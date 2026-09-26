let blogs = [
    {
        title: "Introduction to Web Development",
        author: "Rahul",
        content: "Web development is the process of creating websites using HTML, CSS and JavaScript."
    },
    {
        title: "Learning JavaScript",
        author: "Priya",
        content: "JavaScript makes websites interactive and allows developers to create dynamic web applications."
    }
];

function displayBlogs(list = blogs) {

    const container = document.getElementById("blogContainer");

    container.innerHTML = "";

    list.forEach((blog, index) => {

        container.innerHTML += `
            <div class="blog">
                <h3>${blog.title}</h3>

                <small>By ${blog.author}</small>

                <p>${blog.content}</p>

                <button class="delete-btn"
                    onclick="deleteBlog(${index})">
                    Delete
                </button>
            </div>
        `;
    });
}

function addBlog() {

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const content = document.getElementById("content").value;

    if (title === "" || author === "" || content === "") {
        alert("Please fill all fields.");
        return;
    }

    blogs.push({
        title: title,
        author: author,
        content: content
    });

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("content").value = "";

    displayBlogs();

    alert("Blog published successfully!");
}

function deleteBlog(index) {

    blogs.splice(index, 1);

    displayBlogs();
}

function searchBlogs() {

    const searchText =
        document.getElementById("search").value.toLowerCase();

    const filteredBlogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchText) ||
        blog.content.toLowerCase().includes(searchText)
    );

    displayBlogs(filteredBlogs);
}

displayBlogs();