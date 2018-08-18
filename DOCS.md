# themeo-api v0.0.0



- [Songs](#songs)
	- [Create songs](#create-songs)
	- [Delete songs](#delete-songs)
	- [Retrieve songs](#retrieve-songs)
	- [Update songs](#update-songs)
	


# Songs

## Create songs



	POST /songs


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| artistName			| 			|  <p>Songs's artistName.</p>							|
| artistRanking			| 			|  <p>Songs's artistRanking.</p>							|

## Delete songs



	DELETE /songs/:id


## Retrieve songs



	GET /songs


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update songs



	PUT /songs/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| artistName			| 			|  <p>Songs's artistName.</p>							|
| artistRanking			| 			|  <p>Songs's artistRanking.</p>							|


