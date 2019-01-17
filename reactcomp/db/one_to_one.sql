SELECT Album.ArtistId, Artist.ArtistId
FROM Album
INNER JOIN Artist ON Artist.ArtistId = Album.ArtistId;
