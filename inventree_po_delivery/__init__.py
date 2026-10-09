"""InvenTree PO Delivery Plugin.

This plugin tracks whether purchase order line items have been physically
delivered to the plant, which is separate from stock being received.
"""

from .po_delivery_plugin import PODeliveryPlugin

__all__ = ['PODeliveryPlugin']
