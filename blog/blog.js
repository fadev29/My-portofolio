// membuat variabel
let blogs = [];

//fuction : membuat suatu fungsi untuk app kita
function addBlog(event) {
  event.preventDefault();
  let title = document.getElementById("input-blog-title").value;
  let content = document.getElementById("input-blog-content").value;
  let image = document.getElementById("input-blog-image");

  image = URL.createObjectURL(image.files[0]); // untuk mengambil data gambar
  // object
  const blog = {
    blogTitle: title,
    blogContent: content.value,
    blogImage: image,
    author: "fachri djohar",
  };
  //push : method array untuk menambahkan data baru pada array
  blogs.push(blog);
  console.log(blogs);

  renderBlog();
}

// funsi untuk merender konten blog ke blog list
function renderBlog() {
  let contentContainer = document.getElementById("contents");
  contentContainer.innerHTML = "";

  for (let i = 0; i < blogs.length; i++) {
    contentContainer.innerHTML += `
   <div id="contents" class="blog-list">
        <div class="blog-list-item">
          <div class="blog-image">
            <img
              src="${blogs[i].blogImage}"
              alt="blog image"
            />
          </div>
          <div class="blog-content">
            <h1>${blogs[i].blogTitle}</h1>
            <span class="detail-blog-content">
              <p>
                ${blogs[i].blogContent}
              </p>
            </span>
          </div>
        </div>
      </div>`;
  }
}
