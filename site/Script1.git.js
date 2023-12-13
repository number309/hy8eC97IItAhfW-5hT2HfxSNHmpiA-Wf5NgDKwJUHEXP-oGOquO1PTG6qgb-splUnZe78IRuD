//const model = [
//    { type: 'title', value: 'Hi!!' },
//    { type: 'text', value: 'here we go again' },
//    {
//        type: 'col', value: [
//        '12', '23', '43'
//        ]
//    }
//] 

//const $site = document.querySelector('#c')

//model.forEach(block => {
//    let html = ''
//    if (block.type === 'title') {
//        html = title(block)
//    } else if (block.type === 'text') {
//        html = text(block)
//    } else if (block.type === 'col') {
//        html = col(block)
//    }

//    $site.insertAdjacentHTML('beforeend', html)
//})

//function title(block) {
//    return `
//    <div class="row">
//             <div class="col-sm">
//                 <h1>${block.value}</h1>
//             </div>
//    </div>
//    `
//}

//function text(block) {
//    return `
//    <div class="row">
//        <div class="col-sm">
//            <dl>${block.value}</dl>
//        </div>
//    </div>
//    `
//}

//function col(block) {
//    let html = ''
//    block.value.forEach(item => {
//        html += `
//      <div class="row">
//       <div class="col-sm">
//         ${item}
//       </div>
//      </div>
//        `
//    })
//    return `
//    <div class="row">
//    ${html}
//    </div>
//    `
//}