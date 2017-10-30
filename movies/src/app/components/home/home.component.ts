import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: Array<any>;
  moviePosters: Array<any>;

  constructor(private dataService: DataService) {

    // Overrides the background from login/register
    // TODO: find a better way to change <body> background-color
    // body{ ... } in the css file does not work
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = '#fff';

    //only for testing
    this.moviePosters = [
      'https://i.pinimg.com/236x/c9/33/18/c933181df3a46b1cc3f34140f13ef9d9--christopher-nolan-minimalist-movie-posters.jpg',
      'https://i.pinimg.com/236x/87/08/6b/87086bde97144f194d94c50c2fec40d8--arno-digital-illustration.jpg',
      'https://i.pinimg.com/236x/1e/76/d2/1e76d2b4ed7f79c410b9b773f8b730d8--cinema-posters-movie-posters.jpg',
      'https://i.pinimg.com/236x/d7/94/19/d794192115aec0cd650a348fc4e6c477--theatre-posters-music-posters.jpg',
      'https://i.pinimg.com/236x/4c/14/9c/4c149cc160b9cfe4399ce3da4e2cad7c--film-posters-cinema-posters.jpg',
      'https://i.pinimg.com/236x/31/4e/ba/314eba65af78e70ae1b09bd45ac65bef--art-movies-alternative-movie-posters.jpg',
      'https://i.pinimg.com/236x/31/a8/0a/31a80a23e1996b8ef8480120c99548d7--poster-film-movie-posters.jpg',
      'https://i.pinimg.com/236x/c7/ab/5c/c7ab5c0a178c8e476696861279c910a7--terminator--terminator-poster.jpg',
      'https://i.pinimg.com/236x/e7/49/7e/e7497ea0bd84e928d506c44de7d15378--alternative-movie-posters-poster-art.jpg',
      'https://i.pinimg.com/236x/49/41/f7/4941f7314028a75844c6d6b5367b1d6d--alan-turing-game-.jpg',
      'https://i.pinimg.com/236x/7a/a0/b2/7aa0b2af08708899072ab4df64e5caac--ant-man-poster-designs.jpg',
      'https://i.pinimg.com/236x/f3/2f/b0/f32fb0993b679098806d48c5a4dd3e37--chain-saw-movieposter.jpg',
      'https://i.pinimg.com/236x/b2/b8/e5/b2b8e5daddd56ccf4d9846994160e915.jpg',
      'https://i.pinimg.com/236x/6d/2e/d5/6d2ed55a3577cde817203baaa943adad.jpg',
      'https://i.pinimg.com/236x/86/bf/c9/86bfc9793263d10383eca103ae59eee6.jpg',
      'https://i.pinimg.com/236x/c9/33/18/c933181df3a46b1cc3f34140f13ef9d9--christopher-nolan-minimalist-movie-posters.jpg',
    ]

    this.dataService.getMovies()
      .subscribe((res) => {
        this.movies = res
        //console.log(res)
    });
  }

  ngOnInit() {
  }


}
