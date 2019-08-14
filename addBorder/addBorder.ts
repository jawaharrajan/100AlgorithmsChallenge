function addBorder(picture: string[]): string[] {
    
    for(var i = 0; i < picture.length; i++) {
        picture[i] = "*".concat(picture[i]);
        picture[i] = picture[i].concat("*");
        
        console.log(picture[i]);
    };
    picture.unshift("*".repeat(picture.length + 3));
    picture.push("*".repeat(picture.length + 3));

    return picture;
}

console.log(addBorder(["abc", "ded"]));