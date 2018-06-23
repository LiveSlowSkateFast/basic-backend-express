export default (userInfo) => {

  const userMetadata = userInfo.user_metadata ? userInfo.user_metadata : {}
  const appMetadata = userInfo.app_metadata ? userInfo.app_metadata : {}

  return {
    givenName: userMetadata.givenName,
    familyName: userMetadata.familyName,
    email: userInfo.email,
    emailVerified: userInfo.email_verified,
    avatar: userMetadata.avatar || userInfo.picture
  }
}