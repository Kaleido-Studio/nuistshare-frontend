
// get accessKey and secretKey, bucket and bucketDomain from env

const { accessKey, secretKey, bucket, bucketDomain } = process.env


module.exports = {
	accessKey,
	secretKey,
	bucket,
	bucketDomain,
	uploadPath: `/nuistshare-assets/`,
	usePublicPath: true,
	batch: 10,
	ignore: ['**/*.html', '**/*.map'],
	zone: 'up-cn-east-2.qiniup.com'
}