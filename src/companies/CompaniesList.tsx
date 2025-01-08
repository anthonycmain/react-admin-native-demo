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

export const CompaniesList = () => {
  return (
    <InfiniteListBase>
      <CompanyListView />
    </InfiniteListBase>
  );
};

const CompanyListView = () => {
  const { data } = useListContext();
  if (!data) return null;

  return (
    <ScrollView>
      <List.Section>
        {data.map((item: any) => (
          <RecordContextProvider value={item} key={item.id}>
            <CompanyItem />
          </RecordContextProvider>
        ))}
      </List.Section>
      <LoadMoreButton />
    </ScrollView>
  );
};

const CompanyItem = () => {
  const navigate = useNavigate();
  const record = useRecordContext();
  
  return (
    <List.Item
      title={record.name}
      description={record.website}
      left={() => <List.Icon icon="tag" />}
      onPress={() => navigate(`/companies/${record.id}`)}
      style={styles.item}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    paddingLeft: 16,
  },
});
