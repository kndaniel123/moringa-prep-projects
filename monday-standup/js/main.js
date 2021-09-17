

// business logic
function Contact(first, last) {
    this.firstName = first;
    this.lastName = last;
};
Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
}; 

  
 // user interface logic
  $(document).ready(function() {
    $("form#new-contact").submit(function(event) {
      event.preventDefault();
  
      var inputtedFirstName = $("input#new-first-name").val();
      var inputtedLastName = $("input#new-last-name").val();
  //new keyword
      var newContact = new Contact(inputtedFirstName, inputtedLastName);
  
      //$("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");
      $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
      $("#contacts").last().click(function() {
        $("#show-contact").show();
        $("#show-contact h2").text(newContact.fullName());
        $(".first-name").text(newContact.firstName);
        $(".last-name").text(newContact.lastName);
      });  
    });
   
  }); 
  