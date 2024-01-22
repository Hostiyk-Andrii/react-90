import {Topic,Wrapper,MetaWrapper,Text, Button} from './QuizCard.styled';
export const QuizCard = ({ item: { id, topic, level, time, questions },onDelete }) => {
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
                    <Button onClick={()=>onDelete(id)}>Delete</Button>
      </MetaWrapper>
    </Wrapper>
  );
};
