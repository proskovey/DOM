const controlFontSize = Array.from(document.getElementsByClassName('font-size'));

//лучше применить getElementById('book'), но в задании сказано про класс book
const books = Array.from(document.getElementsByClassName('book'));

controlFontSize.forEach(elem => {
	elem.onclick = () =>{
		controlFontSize.forEach( elemInside => {
			elemInside.classList.remove('font-size_active');
		});
		elem.classList.add('font-size_active');
		
		books[0].className='book';
		
		if (elem.classList.contains('font-size_big')){
			books[0].classList.add('book_fs-big');
		}
		if (elem.classList.contains('font-size_small')){
			books[0].classList.add('book_fs-small');
		}
		return false;
	}
});