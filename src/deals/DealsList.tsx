import { List } from "react-native-paper";
import {
  InfiniteListBase,
  RecordContextProvider,
  useGetManyReference,
  useListContext,
  useRecordContext,
} from "ra-core";
import { useNavigate } from "react-router";
import { ScrollView, StyleSheet } from "react-native";
import { LoadMoreButton } from "../ui/LoadMoreButton";

export const DealsList = () => {
  return (
    <InfiniteListBase>
      <DealsListView />
    </InfiniteListBase>
  );
};

const DealsListView = () => {
  const { data } = useListContext();
  if (!data) return null;

  return (
    <ScrollView>
      <List.Section>
        {data.map((item: any) => (
          <RecordContextProvider value={item} key={item.id}>
            <DealItem />
          </RecordContextProvider>
        ))}
      </List.Section>
      <LoadMoreButton />
    </ScrollView>
  );
};

const DealItem = () => {
  const navigate = useNavigate();
  const record = useRecordContext();
  
  return (
    <List.Item
      title={record.name}
      description={record.type}
      left={() => <List.Icon icon="tag" />}
      onPress={() => navigate(`/deals/${record.id}`)}
      style={styles.item}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    paddingLeft: 16,
  },
});
