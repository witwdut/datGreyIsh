class Book{
	constructor(tile,author,imgurl){
	this.title = title;
	this.author = author;
	this.imgurl = imgurl;
	}

	promptInformation(){
		const img = prompt('img');
		const title = prompt('title');
		const author = prompt('author');
		this.title = title;
		this.author = author;
		this.imgurl = img;
	}

get getTitle(){
	return this.title;
}

}