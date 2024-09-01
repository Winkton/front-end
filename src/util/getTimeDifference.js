function getTimeDifference(createdAt) {
  const createdTime = new Date(createdAt);
  const currentTime = new Date();

  // 시간 차이를 초 단위로 계산
  const timeDifferenceInSeconds = Math.floor(
    (currentTime - createdTime) / 1000,
  );

  // 초, 분, 시간 계산
  const minutes = Math.floor(timeDifferenceInSeconds / 60);
  const hours = Math.floor(minutes / 60);

  if (hours > 0) {
    return `${hours}시간 전`;
  }
  if (minutes > 0) {
    return `${minutes}분 전`;
  }

  return '방금 전';
}

export default getTimeDifference;
