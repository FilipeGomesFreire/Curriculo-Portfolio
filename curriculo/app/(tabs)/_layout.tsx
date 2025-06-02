import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { Icon } from 'react-native-elements';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: { position: 'absolute' },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="(tabs)/index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Icon name="home" type="feather" color={color} />,
        }}
      />
      <Tabs.Screen
        name="(tabs)/sobre"
        options={{
          title: 'Sobre',
          tabBarIcon: ({ color }) => <Icon name="info" type="feather" color={color} />,
        }}
      />
      <Tabs.Screen
        name="(tabs)/experiencia-academica"
        options={{
          title: 'Acadêmica',
          tabBarIcon: ({ color }) => <Icon name="book" type="feather" color={color} />,
        }}
      />
      <Tabs.Screen
        name="(tabs)/experiencia-profissional"
        options={{
          title: 'Profissional',
          tabBarIcon: ({ color }) => <Icon name="briefcase" type="feather" color={color} />,
        }}
      />
      <Tabs.Screen
        name="(tabs)/projetos"
        options={{
          title: 'Projetos',
          tabBarIcon: ({ color }) => <Icon name="code" type="feather" color={color} />,
        }}
      />
      <Tabs.Screen
        name="(tabs)/jogo"
        options={{
          title: 'Senha',
          tabBarIcon: ({ color }) => <Icon name="lock" type="feather" color={color} />,
        }}
      />
    </Tabs>
  );
}
