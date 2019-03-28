// Выбор упаковки
function active() {
    let target = event.currentTarget;
    var item = target.parentNode;
    if (target.classList.contains('packs__wrap') && !item.classList.contains('disabled')) {
        item.classList.toggle('active');
    }
    if (target.classList.contains('packs__link')) {
        var currentItem = target.parentNode.parentNode;
        currentItem.classList.toggle('active');
    }
}
// var block = document.querySelector('.packs');
// window.addEventListener('mouseover', event => {
//     target = event.target;
//     currentTarget = target.parentNode;
//     if (!currentTarget.classList.contains('disabled')) {
//         if (currentTarget.classList.contains('hover')) {
//             currentTarget.classList.remove('hover');
//         }
//         if (currentTarget.classList.contains('hover_active')) {
//             currentTarget.classList.remove('hover_active');
//         }
//     }
// });

function hover() {
    let target = event.currentTarget;
    var item = target.parentNode;
    if (!item.classList.contains('disabled')) {
        if (item.classList.contains('hover')) {
            item.classList.remove('hover');
        }
        if (item.classList.contains('hover_active')) {
            item.classList.remove('hover_active');
        }
    }
}
function hoverout() {
    let target = event.currentTarget;
    var item = target.parentNode;
    if (!item.classList.contains('disabled')) {
        if (!item.classList.contains('active')) {
            item.classList.add('hover');
        }
        if (item.classList.contains('active')) {
            item.classList.add('hover_active');
        }
    }
}