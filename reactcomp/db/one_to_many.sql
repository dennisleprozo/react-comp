SELECT Album.AlbumId, Artist.ArtistId, Album.Title
FROM Album
INNER JOIN Artist ON Artist.ArtistId = Album.ArtistId;
