import Profile from '../components/Profile/Profile';
import user from '../components/Profile/user.json';
import Statistics from '../components/Statistics/Statistics';
import data from '../components/Statistics/data.json';
import FriendsList from '../components/FriendsList/FriendsList';
import friends from '../components/FriendsList/friends.json';
import TransactionHistory from '../components/TransactionHistory/TransactionHistory';
import transactions from '../components/TransactionHistory/transactions.json';
export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
