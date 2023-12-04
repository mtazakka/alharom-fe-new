import { useQuery } from '@tanstack/react-query';
import { queryKeys } from 'configs';
import dayjs from 'dayjs';
import {
  getCustomerOption,
  getInvoiceSeq,
  getServiceOption,
  getServiceVariantDetailGroupOption,
  getServiceVariantDetailOption,
  getServiceVariantOption
} from 'services';

export function useJenisVariantLayananOption(idService) {
  const queryOption = useQuery([queryKeys.serviceVariantOption, idService], () => getServiceVariantOption({ idservice: idService }), {
    onSuccess: (data) => {
      const mappedData = data.data.map((item) => ({ label: dayjs(item.label).format('MMMM YYYY'), value: item.value }));
      return mappedData;
    }
  });

  return {
    jenisVariantLayananOption: queryOption?.data
  };
}

export function useVariantLayananDetailOption(idVariant) {
  const queryOption = useQuery(
    [queryKeys.serviceVariantDetailOption, idVariant],
    () => getServiceVariantDetailOption({ idvariant: idVariant }),
    {
      onSuccess: (data) => {
        const mappedData = data.data.map((item) => ({
          label: dayjs(item.label).format('DD'),
          value: item.value,
          harga: item.harga
        }));
        return mappedData;
      }
    }
  );
  return {
    jenisDetailVariantLayananOption: queryOption?.data
  };
}

export function useVariantLayananGroupOption(idDetailVariant) {
  const queryOption = useQuery([queryKeys.serviceVariantDetailGroupOption, idDetailVariant], () =>
    getServiceVariantDetailGroupOption({ idvariant_detail: idDetailVariant })
  );
  return {
    grupOption: queryOption?.data?.data
  };
}

export function useTransactionOption() {
  const queryInvoice = useQuery([queryKeys.invoiceSeq], getInvoiceSeq);
  const queryCustomerOption = useQuery([queryKeys.customerOption], getCustomerOption);
  const queryJenisLayananOption = useQuery([queryKeys.serviceVariant], getServiceOption);

  return {
    currentInvoice: queryInvoice.data?.data,
    pelangganOption: queryCustomerOption.data?.data,
    jenisLayananOption: queryJenisLayananOption.data?.data
  };
}
