SELECT Album.Title, Artist.Name
FROM Album
INNER JOIN Artist ON Artist.ArtistId = Album.ArtistId;