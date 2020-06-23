# GitChrisQueen_TDA_JS.PostAccessBody

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessType** | **String** | Set to offline to receive a refresh token on an authorization_code grant type request. Do not set to offline on a refresh_token grant type request. | [optional] 
**ClientId** | **Number** | OAuth User ID of your application | 
**Code** | **String** | Required if trying to use authorization code grant | [optional] 
**GrantType** | **String** | The grant type of the oAuth scheme. Possible values are authorization_code, refresh_token | 
**RedirectUri** | **String** | Required if trying to use authorization code grant | [optional] 
**RefreshToken** | **String** | Required if using refresh token grant | [optional] 

