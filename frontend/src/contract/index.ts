import type { Env } from "@terra-money/terrain";
import { BoardClient } from './clients/BoardClient';

export class Lib extends BoardClient {
  env: Env;

  constructor(env: Env) {
    super(env.client, env.defaultWallet, env.refs['board'].contractAddresses.default);
    this.env = env;
  }
};

export default Lib;
