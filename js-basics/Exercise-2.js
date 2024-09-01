let pic = isLandscape(100, 200);

if (pic === true) {
    console.log('ok');
}
else {
    console.log('not okay');
}




function isLandscape(width, height) {
    if (width > height)
        return true;
    else
        return false;
}