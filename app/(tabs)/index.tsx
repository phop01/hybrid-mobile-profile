import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { Linking, Platform, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

// อัปเดตข้อมูลของคุณได้ที่นี่
const PROFILE = {
  nameTh: 'นายปภพ สุระทิพย์',
  nameEn: 'Paphop Surathip',
  studentId: '663450176-7',
  faculty: 'คณะสหวิทยาการ',
  program: 'สาขาวิชาวิทยาการคอมพิวเตอร์และสารสนเทศ (อื่นๆ)',
};

// ใส่รูปโปรไฟล์ของคุณที่ไฟล์: assets/images/profile.png (แทนที่ไฟล์ placeholder เดิมได้เลย)
const PROFILE_IMAGE = require('@/assets/images/profile.png');

const CONTACTS: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  url: string;
  color: string;
}[] = [
  { icon: 'mail', label: 'Email', url: 'mailto:psurathip@gmail.com', color: '#EA4335' },
  { icon: 'logo-github', label: 'GitHub', url: 'https://github.com/', color: '#181717' },
  { icon: 'logo-facebook', label: 'Facebook', url: 'https://facebook.com/', color: '#1877F2' },
];

const HEADER_COLOR = '#0B6E8F';

export default function ProfileScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const cardBackground = colorScheme === 'dark' ? '#1E2226' : '#FFFFFF';
  const pillBackground = colorScheme === 'dark' ? '#26313A' : '#E6F3F8';

  const handleContactPress = (url: string) => {
    Linking.openURL(url).catch(() => {});
  };

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.flex} edges={['top']}>
        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
          <View style={styles.header}>
            <View style={[styles.headerCircle, styles.headerCircleLarge]} />
            <View style={[styles.headerCircle, styles.headerCircleSmall]} />
          </View>

          <View style={styles.avatarWrapper}>
            <Image source={PROFILE_IMAGE} style={styles.avatar} contentFit="cover" />
          </View>

          <View style={styles.body}>
            <ThemedText type="title" style={styles.nameTh}>
              {PROFILE.nameTh}
            </ThemedText>
            <ThemedText style={styles.nameEn}>{PROFILE.nameEn}</ThemedText>

            <View style={[styles.idPill, { backgroundColor: pillBackground }]}>
              <Ionicons name="card-outline" size={16} color={HEADER_COLOR} />
              <ThemedText style={[styles.idPillText, { color: HEADER_COLOR }]}>
                {PROFILE.studentId}
              </ThemedText>
            </View>

            <View style={[styles.infoCard, { backgroundColor: cardBackground }]}>
              <View style={styles.infoRow}>
                <Ionicons name="school-outline" size={20} color={HEADER_COLOR} />
                <View style={styles.infoTextWrapper}>
                  <ThemedText style={styles.infoLabel}>คณะ</ThemedText>
                  <ThemedText style={styles.infoValue}>{PROFILE.faculty}</ThemedText>
                </View>
              </View>
              <View style={styles.infoDivider} />
              <View style={styles.infoRow}>
                <Ionicons name="book-outline" size={20} color={HEADER_COLOR} />
                <View style={styles.infoTextWrapper}>
                  <ThemedText style={styles.infoLabel}>หลักสูตร</ThemedText>
                  <ThemedText style={styles.infoValue}>{PROFILE.program}</ThemedText>
                </View>
              </View>
            </View>

            <ThemedText style={styles.contactTitle}>ติดต่อฉัน</ThemedText>
            <View style={styles.contactRow}>
              {CONTACTS.map((contact) => (
                <Pressable
                  key={contact.label}
                  style={({ pressed }) => [styles.contactButton, pressed && styles.contactButtonPressed]}
                  onPress={() => handleContactPress(contact.url)}>
                  <View style={[styles.contactIconCircle, { backgroundColor: contact.color }]}>
                    <Ionicons name={contact.icon} size={22} color="#fff" />
                  </View>
                  <ThemedText style={styles.contactLabel}>{contact.label}</ThemedText>
                </Pressable>
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const AVATAR_SIZE = 140;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    height: 180,
    backgroundColor: HEADER_COLOR,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    overflow: 'hidden',
  },
  headerCircle: {
    position: 'absolute',
    borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.12)',
  },
  headerCircleLarge: {
    width: 220,
    height: 220,
    top: -80,
    right: -60,
  },
  headerCircleSmall: {
    width: 120,
    height: 120,
    bottom: -50,
    left: -30,
  },
  avatarWrapper: {
    alignItems: 'center',
    marginTop: -(AVATAR_SIZE / 2) - 20,
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    borderWidth: 4,
    borderColor: '#fff',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  body: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 40,
  },
  nameTh: {
    fontSize: 24,
    textAlign: 'center',
  },
  nameEn: {
    fontSize: 15,
    opacity: 0.6,
    marginTop: 2,
  },
  idPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 999,
    marginTop: 14,
  },
  idPillText: {
    fontSize: 14,
    fontWeight: '600',
  },
  infoCard: {
    width: '100%',
    borderRadius: 20,
    padding: 18,
    marginTop: 24,
    gap: 14,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  infoTextWrapper: {
    flex: 1,
    gap: 2,
  },
  infoLabel: {
    fontSize: 12,
    opacity: 0.55,
  },
  infoValue: {
    fontSize: 15,
    fontWeight: '500',
  },
  infoDivider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'rgba(128,128,128,0.3)',
  },
  contactTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 28,
    alignSelf: 'flex-start',
  },
  contactRow: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 14,
  },
  contactButton: {
    alignItems: 'center',
    gap: 6,
  },
  contactButtonPressed: {
    opacity: 0.6,
  },
  contactIconCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactLabel: {
    fontSize: 12,
  },
});
