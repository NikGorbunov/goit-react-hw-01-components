import Profile from "./components/Profile/Profile";
import user from "./utils/user.json";
import statisticalData from "./utils/statistical-data.json";
import Statistics from "./components/Statistics/Statistics";
import friends from "./utils/friends.json";
import FriendList from "./components/FriendList/FriendList";
import transactions from "./utils/transactions.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import Container from "./components/Container/Container";

export default function App() {
  return (
    <div>
      <Container>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={statisticalData} />
        <Statistics stats={statisticalData} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </Container>
    </div>
  );
}
