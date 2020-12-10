import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import Column from '../Column/Column';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
    source: PropTypes.string.isRequired,
    columns: PropTypes.array,
  };

  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  };

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} image={this.props.source} />
        <div className={styles.description}>{this.props.children}</div>

        <div className={styles.columns}>
          <Column minititle={this.props.columns[0]} />
          <Column minititle={this.props.columns[1]} />
          <Column minititle={this.props.columns[2]} />
        </div>
      </section>
    );
  }
}

export default List;
