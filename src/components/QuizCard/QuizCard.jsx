import {Topic,Wrapper,MetaWrapper,Text, Button} from './QuizCard.styled';
export const QuizCard = ({ item: { id, topic, level, time, questions } }) => {
  return (
    <Wrapper level={level}>
      <Topic>{topic}</Topic>
      <MetaWrapper>
        <Text>
          <b>Level:</b>
          {level}
        </Text>
        <Text>
          <b>Time:</b>
          {time}
        </Text>
        <Text>
          <b>Questions:</b>
          {questions}
                    </Text>
                    <Button>Delete</Button>
      </MetaWrapper>
    </Wrapper>
  );
};
