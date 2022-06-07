let check = 0;
let switched = true;
function moveEl(btn) {
    if (check == 0) {
        btn.style.borderStyle = "dashed";
        check = 1;
        switched = true;
        Drag(btn);
        return;
    }
    else {
        btn.style.borderStyle = "none";
        check = 0;
        switched = false;
        return;
    }
}
function Drag(btn) {
    if (switched == true) {
        console.log("TRUE");
        dragElement(btn);
        function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
        } else {
        elmnt.onmousedown = dragMouseDown;
        }
        function dragMouseDown(z) {
        z = z || window.event;
        z.preventDefault();
        pos3 = z.clientX;
        pos4 = z.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
        }
        function elementDrag(z) {
        z = z || window.event;
        z.preventDefault();
        pos1 = pos3 - z.clientX;
        pos2 = pos4 - z.clientY;
        pos3 = z.clientX;
        pos4 = z.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }
        function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
        }
    }
    }
}
