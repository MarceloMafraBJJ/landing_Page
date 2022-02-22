const qs = (element) => document.querySelector(element);


qs('.iphone').addEventListener("mouseover", () => {
    qs('.iphone').style.marginRight = '40px';
    qs('.iphonePro').style.marginLeft = '40px';
})
qs('.iphone').addEventListener("mouseout", () => {
    qs('.iphonePro').style.marginLeft = '0';
    qs('.iphone').style.marginRight = '0';

})
qs('.iphonePro').addEventListener("mouseover", () => {
    qs('.iphone').style.marginRight = '40px';
    qs('.iphonePro').style.marginLeft = '40px';
})
qs('.iphonePro').addEventListener("mouseout", () => {
    qs('.iphonePro').style.marginLeft = '0';
    qs('.iphone').style.marginRight = '0';

})