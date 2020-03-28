const comments = [{
    id: '1',
    name: 'Razvan',
    email: 'razvan@gmail.com',
    msg: 'ce faci...?',
    img: 'unnamed.jpg'
},]

const btn = document.querySelector('#commentBtn');
const input = document.querySelector('#commentInput');
const commentList = document.querySelector('#commentList');

btn.addEventListener('click', function () {
    comments.push({
        name: 'Alex',
        email: 'alexp@gmail.com',
        msg: input.value
    });
    displayComments(comments, document.body)
})


displayComments(comments, document.body)



function displayComments(comments, containerNode) {
    console.log(comments);

    input.value = "";



    function addParagraph(text) {
        const newP = document.createElement("p");
        newP.innerText = text;
        return newP;
    }

    function addTitle(title) {
        const h3 = document.createElement("h3");
        h3.innerText = title;
        return h3;
    }

    function addEmail(email) {
        const h4 = document.createElement("h4");
        h4.innerText = email;
        return h4;
    }

    function addImage(image) {
        const img = document.createElement("img");
        img.src = "unnamed.jpg";
        img.id = "userimg";
        img.innerHTML = image;
        return img;

    }


    // clear the container

    //    function clearcontent() { 
    //     var mycontainer = document.getElementById("container");
    //             mycontainer.innerHTML = "";

    // } 
    //     clearcontent()



    //Creare nod comentariu
    function createCommentNode(comment) {
        const containerBox = document.createElement('div');
        containerBox.id = "container";


        //Create Delete button

        const button = document.createElement('button');
        button.id = "btn";
        button.innerHTML = "Delete";




        // remove comm
        button.addEventListener('click', function removeElement() {
            var myobj = document.getElementById("container");
            myobj.remove();
        });

        const title = addTitle(comment.name);
        const image = addImage(comment.image);
        const email = addEmail(comment.email);
        const p = addParagraph(comment.msg);


        containerBox.appendChild(image);
        containerBox.appendChild(title);
        containerBox.appendChild(email);
        containerBox.appendChild(p);
        containerBox.appendChild(button);

        return containerBox;
    }


    // parcurgere commentarii
    for (let idx = 0; idx < comments.length; idx++) {
        const comment = comments[idx];
        // / realizeaza reprezentarea comentariului in DOM
        const commentNode = createCommentNode(comment);
        // pune comentariul in DOM
        containerNode.appendChild(commentNode);
    }


}

