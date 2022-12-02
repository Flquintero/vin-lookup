import single from "@/components/views/vin-lookup/VinLookupSingle.vue";
import bulk from "@/components/views/vin-lookup/VinLookupBulk.vue";
import manual from "@/components/views/vin-lookup/VinLookupManual.vue";

import type { IComponentsObject } from "@/types/general/interfaces";
import { EVinLookupOption } from "@/types/vin-lookup/enums";

const vinLookupOptions: IComponentsObject = {
  single,
  bulk,
  manual,
};

export function getVinLookupOptions(vinLookupEnum: number) {
  return vinLookupOptions[EVinLookupOption[vinLookupEnum]];
}
