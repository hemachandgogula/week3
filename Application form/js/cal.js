function addDetails() {
    console.log("Add button clicked");
    if (validateFirstName()) {
        if (validateFullname()) {
            postData();
        }
        else
        {
            displayErrormsgforFullname();
        }
    }
    else
    {
        displayErrormsgforFirstname();
    }
}
function displayErrormsgforFirstname() {
$('#errorforFirstName').show();
}
function displayErrormsgforFullname() {
    $('#errorforFullName').show();
}
function validateFirstName() {
    const firstname = $('.FirstName').val();
    if (firstname == '') {
        return false;
    }
    return true;

}
function validateFullname() {
    const fullname = $('.FullName').val();
    if (fullname == '') {
        return false;
    }
    return true;

}
function postData() {
    const data={
          firstname: $('.FirstName').val(),
          fullname: $('.FullName').val()
    }
    console.log(data);
    $.ajax({
        type: "POST",
        url: 'https://virtusa-id.firebaseio.com/application.json',
        data: JSON.stringify(data),
        success: function(data){
            console.log(data);
        },
        // dataType: dataType
        error :function(err){}
      });
}
// $('.document').ready(() => {

//     $('.spans-for-errors').hide();
// }
// );