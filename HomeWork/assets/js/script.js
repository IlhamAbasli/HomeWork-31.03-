"use strict";




let btn = document.querySelector("button");

let tbody = document.querySelector("tbody");




async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    let str = "";
    posts.forEach(post => {
        str+=`<tr>
        <td>${post.id}</td>
        <td class="post-title" style="cursor:pointer" data-id="${post.id}" data-bs-toggle="modal" data-bs-target="#${post.id}">${post.title}</td>
        <td>${post.body}</td>
        </tr>`
    });
    tbody.innerHTML = str;
  }
    
  
  getPosts();


setTimeout(() => {
    let postTitles = document.querySelectorAll("table .post-title");
    
    postTitles.forEach(title => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${title.getAttribute("data-id")}`)
                .then((response) => response.json())
                .then((json) => {
                    title.parentNode.innerHTML+=`      
                    <div class="modal fade" id="${json.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="exampleModalLabel">
                            ${json.title}
                          </h1>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">${json.body}</div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            Close
                          </button>
                          <button type="button" class="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>`
                });
    });
}, 1000);