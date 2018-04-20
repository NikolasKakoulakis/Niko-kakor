
 
document.addEventListener("DOMContentLoaded", 
function() {

document.querySelectorAll(".toppmeny>li").forEach(function(l) {

    add_class(l, "menuclosed");
    l.addEventListener("click", menuclick);
    
    
    l.addEventListener("focusin", menufocused);
    l.addEventListener("focusout", menuunfocused);
})


function menuclick(e) {
  document.querySelectorAll(".toppmeny>li").forEach(
    function(l) {
        if (l===e.currentTarget) {
            toggle_class(l, "menuclosed");
        }else add_class(l, "menuclosed"); 
    });
}
    
function menufocused(e) {
    remove_class(e.currentTarget, "menuclosed");
}
    
function menuunfocused(e) {
    add_class(e.currentTarget, "menuclosed");
}
    

function toggle_class(el, cls) {
    if (has_class(el, cls)) {
        remove_class(el, cls);
    }
    else {
        add_class(el, cls);
    }
}


function has_class(el, cls) {
    return el.className.split(" ").includes(cls);
}


function add_class(el, cls) {
    if (!has_class(el, cls)) {
        el.className += (el.classname==""? "": " ") + cls;
    }
}
function remove_class(el, cls) {
    
    el.className = el.className.split(" ").filter(c => c!== cls).join(" ");
}
    
});