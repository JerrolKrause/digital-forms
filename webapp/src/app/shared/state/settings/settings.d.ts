import { Role } from '$shared';

interface Settings {
  token: string | null;
  userName: string;
  version: string | number;
  role: Role;
}
