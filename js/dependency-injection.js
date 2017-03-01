var person = function (fname, lname) {
    this.fname = fname;
    this.lname = lname;
}

function logit(person) {
    console.log(person);
}

var sumit = new person("sumit", "kumar");

logit(sumit);


