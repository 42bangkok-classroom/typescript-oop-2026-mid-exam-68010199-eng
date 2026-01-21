interface FullAlbum {}

const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos';
const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';

function mapPhotoToAlbum(userIds?: number[]): Promise<FullAlbum[]>
