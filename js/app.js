//*******************************************************/
//Creates a New Note 
//*****************************************************/
const noteDiv = document.getElementById('note-div');
document.getElementById('note-button').addEventListener ('click', (e)=> {
    if(noteDiv.style.display == 'none'){
        noteDiv.style.display = 'contents';
    } else if(noteDiv.innerHTML == ""){
        noteDiv.innerHTML = 
        `<div id="container">
            <div class="note-container">
                    <h1> Create Note </h1>
                    <p> Choose a Label </p>
                    <div class="color-container">
                        <div class="color-1"></div>
                        <div class="color-2"></div>
                        <div class="color-3"></div>
                        <div class="color-4"></div>
                        <div class="color-5"></div>
                        <div class="color-6"></div>
                        <div class="color-7"></div>
                        <div class="color-8"></div>
                        <div class="color-9"></div>
                        <div class="color-10"></div>
                        <div class="color-11"></div>
                        <div class="color-12"></div>
                        <div class="color-13"></div>
                        <div class="color-14"></div>
                        <div class="color-15"></div>
                        <div class="color-16"></div>
                        <div class="color-17"></div>
                        <div class="color-18"></div>
                    </div>
                    <p> Give your Note a title </p>
                    <input></input>
                    <p>Write down your note</p>
                    <textarea></textarea>
                    <button>Post Note</button>
                    <button id="cancel">Cancel</button>
            </div>
        </div>`;
    }
//******************************************************************/
// Closes Note when Canceled
//****************************************************************/
document.getElementById('cancel').addEventListener('click',()=>{
    noteDiv.style.display = 'none';
    })  
});


