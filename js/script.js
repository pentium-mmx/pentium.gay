document.querySelectorAll('.mainbox0, .mainbox1').forEach(box => {
    const titlebar = box.querySelector('.titlebar'); // Select the titlebar for dragging
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    titlebar.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - box.offsetLeft;
        offsetY = e.clientY - box.offsetTop;
        box.style.position = 'absolute'; // Ensure the box is positioned absolutely
        box.style.zIndex = '1000'; // Bring the box to the front
        document.body.style.userSelect = 'none'; // Prevent text selection while dragging
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            box.style.left = `${e.clientX - offsetX}px`;
            box.style.top = `${e.clientY - offsetY}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        document.body.style.userSelect = ''; // Re-enable text selection
    });
});