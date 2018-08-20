# themeo-api v0.0.0



- [Artists](#artists)
	- [Create artists](#create-artists)
	- [Delete artists](#delete-artists)
	- [Retrieve artists](#retrieve-artists)
	- [Update artists](#update-artists)
	
- [Auth](#auth)
	- [Authenticate](#authenticate)
	- [Authenticate with Facebook](#authenticate-with-facebook)
	- [Authenticate with Github](#authenticate-with-github)
	- [Authenticate with Google](#authenticate-with-google)
	
- [PasswordReset](#passwordreset)
	- [Send email](#send-email)
	- [Submit password](#submit-password)
	- [Verify token](#verify-token)
	
- [Scores](#scores)
	- [Create scores](#create-scores)
	- [Delete scores](#delete-scores)
	- [Retrieve scores](#retrieve-scores)
	- [Update scores](#update-scores)
	
- [Songs](#songs)
	- [Create songs](#create-songs)
	- [Delete songs](#delete-songs)
	- [Retrieve songs](#retrieve-songs)
	- [Update songs](#update-songs)
	
- [Theme](#theme)
	- [Create theme](#create-theme)
	- [Delete theme](#delete-theme)
	- [Retrieve theme](#retrieve-theme)
	- [Retrieve themes](#retrieve-themes)
	- [Update theme](#update-theme)
	
- [User](#user)
	- [Create user](#create-user)
	- [Delete user](#delete-user)
	- [Retrieve current user](#retrieve-current-user)
	- [Retrieve user](#retrieve-user)
	- [Retrieve users](#retrieve-users)
	- [Update password](#update-password)
	- [Update user](#update-user)
	


# Artists

## Create artists



	POST /artists


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|
| artist_id			| 			|  <p>Artists's artist_id.</p>							|
| artist_name			| 			|  <p>Artists's artist_name.</p>							|

## Delete artists



	DELETE /artists/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|

## Retrieve artists



	GET /artists/:id


## Update artists



	PUT /artists/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|
| artist_id			| 			|  <p>Artists's artist_id.</p>							|
| artist_name			| 			|  <p>Artists's artist_name.</p>							|

# Auth

## Authenticate



	POST /auth

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Basic authorization with email and password.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Master access_token.</p>							|

## Authenticate with Facebook



	POST /auth/facebook


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Facebook user accessToken.</p>							|

## Authenticate with Github



	POST /auth/github


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Github user accessToken.</p>							|

## Authenticate with Google



	POST /auth/google


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Google user accessToken.</p>							|

# PasswordReset

## Send email



	POST /password-resets


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| email			| String			|  <p>Email address to receive the password reset token.</p>							|
| link			| String			|  <p>Link to redirect user.</p>							|

## Submit password



	PUT /password-resets/:token


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| password			| String			|  <p>User's new password.</p>							|

## Verify token



	GET /password-resets/:token


# Scores

## Create scores



	POST /scores


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| score_id			| 			|  <p>Scores's score_id.</p>							|
| theme_id			| 			|  <p>Scores's theme_id.</p>							|
| user_id			| 			|  <p>Scores's user_id.</p>							|
| song_id			| 			|  <p>Scores's song_id.</p>							|
| score			| 			|  <p>Scores's score.</p>							|
| song_comment			| 			|  <p>Scores's song_comment.</p>							|

## Delete scores



	DELETE /scores/:id


## Retrieve scores



	GET /scores


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update scores



	PUT /scores/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| score_id			| 			|  <p>Scores's score_id.</p>							|
| theme_id			| 			|  <p>Scores's theme_id.</p>							|
| user_id			| 			|  <p>Scores's user_id.</p>							|
| song_id			| 			|  <p>Scores's song_id.</p>							|
| score			| 			|  <p>Scores's score.</p>							|
| song_comment			| 			|  <p>Scores's song_comment.</p>							|

# Songs

## Create songs



	POST /songs


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| song_id			| 			|  <p>Songs's song_id.</p>							|
| songName			| 			|  <p>Songs's songName.</p>							|
| user_id			| 			|  <p>Songs's user_id.</p>							|
| artistName			| 			|  <p>Songs's artistName.</p>							|
| comment			| 			|  <p>Songs's comment.</p>							|
| url			| 			|  <p>Songs's url.</p>							|
| videoId			| 			|  <p>Songs's videoId.</p>							|

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
| song_id			| 			|  <p>Songs's song_id.</p>							|
| songName			| 			|  <p>Songs's songName.</p>							|
| user_id			| 			|  <p>Songs's user_id.</p>							|
| artistName			| 			|  <p>Songs's artistName.</p>							|
| comment			| 			|  <p>Songs's comment.</p>							|
| url			| 			|  <p>Songs's url.</p>							|
| videoId			| 			|  <p>Songs's videoId.</p>							|

# Theme

## Create theme



	POST /theme


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| theme_id			| 			|  <p>Theme's theme_id.</p>							|
| theme_name			| 			|  <p>Theme's theme_name.</p>							|
| theme_agent_id			| 			|  <p>Theme's theme_agent_id.</p>							|
| theme_youtube			| 			|  <p>Theme's theme_youtube.</p>							|
| theme_num_ppl			| 			|  <p>Theme's theme_num_ppl.</p>							|
| theme_date			| 			|  <p>Theme's theme_date.</p>							|
| seqNoCommentofWeek			| 			|  <p>Theme's seqNoCommentofWeek.</p>							|
| theme_used			| 			|  <p>Theme's theme_used.</p>							|
| theme_current			| 			|  <p>Theme's theme_current.</p>							|

## Delete theme



	DELETE /theme/:id


## Retrieve theme



	GET /theme/:id


## Retrieve themes



	GET /theme


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update theme



	PUT /theme/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| theme_id			| 			|  <p>Theme's theme_id.</p>							|
| theme_name			| 			|  <p>Theme's theme_name.</p>							|
| theme_agent_id			| 			|  <p>Theme's theme_agent_id.</p>							|
| theme_youtube			| 			|  <p>Theme's theme_youtube.</p>							|
| theme_num_ppl			| 			|  <p>Theme's theme_num_ppl.</p>							|
| theme_date			| 			|  <p>Theme's theme_date.</p>							|
| seqNoCommentofWeek			| 			|  <p>Theme's seqNoCommentofWeek.</p>							|
| theme_used			| 			|  <p>Theme's theme_used.</p>							|
| theme_current			| 			|  <p>Theme's theme_current.</p>							|

# User

## Create user



	POST /users


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Master access_token.</p>							|
| email			| String			|  <p>User's email.</p>							|
| password			| String			|  <p>User's password.</p>							|
| name			| String			| **optional** <p>User's name.</p>							|
| picture			| String			| **optional** <p>User's picture.</p>							|
| role			| String			| **optional** <p>User's role.</p>							|

## Delete user



	DELETE /users/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

## Retrieve current user



	GET /users/me


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

## Retrieve user



	GET /users/:id


## Retrieve users



	GET /users


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update password



	PUT /users/:id/password

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Basic authorization with email and password.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| password			| String			|  <p>User's new password.</p>							|

## Update user



	PUT /users/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| name			| String			| **optional** <p>User's name.</p>							|
| picture			| String			| **optional** <p>User's picture.</p>							|


