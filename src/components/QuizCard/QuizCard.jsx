import { Component } from 'react';
import { Topic, Wrapper, MetaWrapper, Text, Button } from './QuizCard.styled';
import { TopicModal } from 'components/TopicModal';

export class QuizCard extends Component {
  state = {
    isModalOpen: false,
  };
  openModal = () => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };
  render() {
    const { isModalOpen } = this.state;
    const {
      item: { id, topic, level, time, questions },
      onDelete,
    } = this.props;

    return (
      <Wrapper level={level}>
        <Topic onClick={this.openModal}>{topic}</Topic>
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
        </MetaWrapper>
        <Button onClick={() => onDelete(id)}>Delete</Button>

        <TopicModal
          isOpen={isModalOpen}
          toggleModal={this.openModal}
          topic={topic}
        />
      </Wrapper>
    );
  }
}

// () => {
