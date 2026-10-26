
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

const modules = [
  {
    number: '01',
    title: 'Clientes',
    description: 'Cadastro e consulta de clientes',
    icon: '👥',
  },
  {
    number: '02',
    title: 'Equipamentos',
    description: 'Computadores, notebooks e outros',
    icon: '💻',
  },
  {
    number: '03',
    title: 'Ordens de Serviço',
    description: 'Acompanhe os atendimentos técnicos',
    icon: '🛠️',
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#10283F" />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>DS</Text>
          </View>

          <View style={styles.brand}>
            <Text style={styles.brandName}>DS INFORMÁTICA</Text>
            <Text style={styles.brandSubtitle}>Serviços e Acessórios</Text>
          </View>

          <View style={styles.status}>
            <View style={styles.statusDot} />
          </View>
        </View>

        <View style={styles.welcome}>
          <Text style={styles.eyebrow}>PAINEL DE CONTROLE</Text>
          <Text style={styles.title}>
           
            <Text style={styles.titleAccent}>Bora trabalhar?</Text>
          </Text>
          <Text style={styles.welcomeDescription}>
            Gerencie seus clientes, equipamentos e serviços em um só lugar.
          </Text>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Seus módulos</Text>
          <Text style={styles.sectionCount}>03 MÓDULOS</Text>
        </View>

        {modules.map((module) => (
          <View key={module.number} style={styles.moduleCard}>
            <View style={styles.moduleIcon}>
              <Text style={styles.moduleEmoji}>{module.icon}</Text>
            </View>

            <View style={styles.moduleInfo}>
              <Text style={styles.moduleTitle}>{module.title}</Text>
              <Text style={styles.moduleDescription}>
                {module.description}
              </Text>
            </View>

            <Text style={styles.moduleNumber}>{module.number}</Text>
          </View>
        ))}

        <View style={styles.notice}>
          <Text style={styles.noticeTitle}>Seu trabalho, mais organizado.</Text>
          <Text style={styles.noticeText}>
            Estamos preparando as ferramentas para facilitar sua rotina de
            atendimento técnico.
          </Text>
        </View>

        <Text style={styles.footer}>DS INFORMÁTICA © 2026</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F6FA',
  },
  content: {
    paddingHorizontal: 22,
    paddingTop: 56,
    paddingBottom: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 42,
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#1E6AA8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
  },
  brand: {
    marginLeft: 12,
    flex: 1,
  },
  brandName: {
    color: '#10283F',
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 0.6,
  },
  brandSubtitle: {
    color: '#718096',
    fontSize: 10,
    marginTop: 4,
    letterSpacing: 1.2,
  },
  status: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#D9FBE8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#16A36A',
  },
  welcome: {
    backgroundColor: '#10283F',
    borderRadius: 24,
    padding: 24,
    marginBottom: 32,
  },
  eyebrow: {
    color: '#8CC8FF',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.5,
    marginBottom: 16,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 29,
    lineHeight: 37,
    fontWeight: '800',
  },
  titleAccent: {
    color: '#8CC8FF',
  },
  welcomeDescription: {
    color: '#D1DCE7',
    fontSize: 14,
    lineHeight: 22,
    marginTop: 14,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  sectionTitle: {
    color: '#10283F',
    fontSize: 19,
    fontWeight: '800',
  },
  sectionCount: {
    color: '#718096',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.8,
  },
  moduleCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 18,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E7EDF4',
  },
  moduleIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#EAF4FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  moduleEmoji: {
    fontSize: 23,
  },
  moduleInfo: {
    flex: 1,
    marginLeft: 14,
  },
  moduleTitle: {
    color: '#10283F',
    fontSize: 15,
    fontWeight: '700',
  },
  moduleDescription: {
    color: '#718096',
    fontSize: 11,
    lineHeight: 17,
    marginTop: 5,
  },
  moduleNumber: {
    color: '#9BAABC',
    fontSize: 11,
    fontWeight: '700',
    marginLeft: 8,
  },
  notice: {
    backgroundColor: '#E6F2FF',
    padding: 20,
    borderRadius: 18,
    marginTop: 12,
  },
  noticeTitle: {
    color: '#174D7A',
    fontSize: 14,
    fontWeight: '800',
    marginBottom: 8,
  },
  noticeText: {
    color: '#426580',
    fontSize: 12,
    lineHeight: 19,
  },
  footer: {
    textAlign: 'center',
    color: '#91A0B2',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.2,
    marginTop: 30,
  },
});
