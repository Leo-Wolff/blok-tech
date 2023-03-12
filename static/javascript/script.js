//Quill editor
var toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons    
  ['clean']                                         // remove formatting button
];

var quill = new Quill('#editor', {
   modules: {
    toolbar: toolbarOptions
  },

  placeholder: 'Write your letter',

  theme: 'snow'
});