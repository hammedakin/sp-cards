document.addEventListener("DOMContentLoaded", function () {
      const template = document.getElementById("user-template");
      const container = document.createElement("div");
      container.classList.add("user-cards-container");
      document.body.appendChild(container);

      const users = [
            {
                  name: "John Doe",
                  email: "",
                  age: "28 years old",
                  info: "A passionate wildlife enthusiast and photographer, often found exploring nature.",
                  image: "./img/user1.png",
            },
            {
                  name: "Jane Smith",
                  email: "janesmith@example.com",
                  age: " ",
                  info: "An avid reader and aspiring novelist, Jane loves spending her weekends at local cafes.",
                  image: "./img/user2.png",
            },
            {
                  name: "",
                  email: "mikebrown@example.com",
                  age: "45 years old",
                  info: "Tech-savvy and innovative, Sarah is known for her cutting-edge software solutions.",
                  image: "",
            },
            {
                  name: "Sarah Johnson",
                  email: "sarahjohnson@example.com",
                  age: "30 years old",
                  info: "A fitness enthusiast, Alex enjoys hiking and participating in marathons around the country.",
                  image: "./img/user3.png",
            },
            {
                  name: "Alex Martinez",
                  email: "",
                  age: "27 years old",
                  info: "",
                  image: "",
            },
      ];

      function createUserCard(user, index) {
            const userCard = template.content.cloneNode(true);
            userCard.querySelector(".user-image").src = user.image;
            userCard.querySelector(".user-name").textContent = user.name;
            userCard.querySelector(".user-email").textContent = user.email;
            userCard.querySelector(".user-age").textContent = user.age;
            userCard.querySelector(".user-info").textContent = user.info;

            const closeButton = userCard.querySelector(".btn-close");
            closeButton.textContent = "X"; // Insert X

            closeButton.addEventListener("click", function () {
                  users.splice(index, 1);

                  renderUserCards();
            });

            container.appendChild(userCard);
      }

      function renderUserCards() {
            container.innerHTML = "";

            users.forEach(createUserCard);
      }

      renderUserCards();
});
