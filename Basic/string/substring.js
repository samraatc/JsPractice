const Name = "Bishnu Ojhaiya Tharu";

maxString = 5;

postfix = "...";

if (Name.length > maxString) {
    NewString = Name.substring(0, maxString) + postfix;
}
else {
    NewString = Name;
}

console.log(NewString);