import React, { useState, useEffect, useContext } from "react";
import { View } from "react-native";
import { Text, Icon, Button } from "react-native-elements";
import DropDownPicker from "react-native-dropdown-picker";
import { Modal } from "../../../components/Shared/Modal";
import { styles } from "./PokemonDropDown.styles";
import { typesIcons } from "../../../utils";
import { themeContext } from "../../../config/themeContext";
export function PokemonDropDown(props) {
  const { setFilterValue, filterValue } = props;
  const theme = useContext(themeContext);
  const [open, setOpen] = useState(false);

  const [openDrop, setOpenDrop] = useState(false);
  const [value, setValue] = useState("ninguno");
  const typeKeys = [{ label: "Sin filtro", value: "Sin filtro" }].concat(
    Object.keys(typesIcons).map((type) => ({
      label: type[0].toUpperCase() + type.slice(1, type.length).toLowerCase(),
      value: type,
    }))
  );
  const [items, setItems] = useState(typeKeys);
  const handleChangeValue = (value) => {
    setFilterValue(value);
  };

  return (
    <>
      {open ? (
        <View
          style={{
            width: "80%",
            backgroundColor: "fff",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 5,
            marginBottom: 5,
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              fontSize: 15,
              fontWeight: "bold",
              color: theme.color,
            }}
          >
            Tipo:
          </Text>
          <DropDownPicker
            open={openDrop}
            placeholder="Seleccionar"
            value={value}
            items={items}
            setOpen={setOpenDrop}
            setValue={setValue}
            setItems={setItems}
            containerStyle={{ width: "80%", borderWidth: 0 }}
            onChangeItem={(item) => {
              setValue(item.value);
            }}
            onChangeValue={(value) => handleChangeValue(value)}
            subItems="subitems"
            style={{
              minHeight: 50,
              borderWidth: 0,
              backgroundColor: theme.backgroundColor,
            }}
            dropDownContainerStyle={{
              backgroundColor: theme.backgroundColor,
              color: theme.color,
            }}
            textStyle={{ color: theme.color }}
            showArrowIcon={false}
          />

          <View style={{ alignSelf: "center" }}>
            <Icon
              type="material-community"
              name="close"
              onPress={() => {
                setOpenDrop(false);
                setOpen(false);
              }}
              color={theme.color}
            />
          </View>
        </View>
      ) : (
        <>
          <View
            style={{
              marginTop: 10,
              marginBottom: 10,
              flexDirection: "row",
              alignSelf: "flex-start",
              marginLeft: 20,
            }}
          >
            <Icon
              type="material-community"
              name="filter-variant"
              onPress={() => setOpen(true)}
              color={theme.color}
              size={30}
            />
            <Text
              onPress={() => setOpen(true)}
              style={{ fontSize: 20, color: theme.color }}
            >
              Filtrar
            </Text>
          </View>
        </>
      )}
    </>
  );
}

/*
<Modal
        show={open}
        close={onClose}
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: 200,
          top: 60,
          right: 0,
          position: "absolute",
        }}
        backdropStyle={{ backgroundColor: "transparent" }}
      ></Modal>



      */
