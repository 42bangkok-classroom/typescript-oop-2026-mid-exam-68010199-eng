export interface FullAlbum {
  userId: number
  id: number
  title: string
  photos: any[]
}

const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos';
const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';

function mapPhotoToAlbum(userIds?: number[]): Promise<FullAlbum[]> {
  return Promise.all([
    fetch(ALBUMS_URL).then(res => res.json()),
    fetch(PHOTOS_URL).then(res => res.json())
  ]).then(([albums, photos]) => {
    let result = albums.map((album: any) => ({
      ...album,
      photos: photos.filter((p: any) => p.albumId === album.id)
    }))

    if (userIds && userIds.length > 0) {
      result = result.filter((a: any) => userIds.includes(a.userId))
    }

    return result
  })
}
