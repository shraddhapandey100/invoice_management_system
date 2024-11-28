from rest_framework import serializers
from .models import Invoice, InvoiceDetail

class InvoiceDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = InvoiceDetail
        fields = '__all__'  # Include all fields from InvoiceDetail

class InvoiceSerializer(serializers.ModelSerializer):
    details = InvoiceDetailSerializer(many=True)  # Nested InvoiceDetail

    class Meta:
        model = Invoice
        fields = ['id', 'invoice_number', 'customer_name', 'date', 'details']

    def create(self, validated_data):
        details_data = validated_data.pop('details')
        invoice = Invoice.objects.create(**validated_data)  # Create Invoice
        for detail_data in details_data:
            InvoiceDetail.objects.create(invoice=invoice, **detail_data)  # Create associated details
        return invoice
